import React, { useState } from 'react'
import APIPaths from '../API/APIPaths';
import httpClient from '../API/httpClient';
import { ILoginResponse } from '../types';

export default function useAuthentication() {

    const getToken = () => {
        const token = sessionStorage.getItem("token") || "";
        return token;
    }

    const getRefreshTokenId = () => {
        const token = sessionStorage.getItem("refreshTokenId") || "";
        return token;
    }


    const [token, setToken] = useState<string>(getToken());
    const [refreshTokenId, setRefreshTokenId] = useState<string>(getRefreshTokenId)

    const saveToken = (token: string, refreshTokenId: string) => {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("refreshTokenId", refreshTokenId);
        setRefreshTokenId(refreshTokenId);
        setToken(token);
    }

    const refreshToken = () => {
        httpClient.post<ILoginResponse>(APIPaths.REFRESH_TOKEN, {
            refreshTokenId : getRefreshTokenId()
        }).then((res)=> {
            saveToken(res.data.accessToken, res.data.refreshTokenId);
            setTimeout(() => {
                refreshToken();
            },590000)
        })
    }

    const login = (username: string, password: string) => {
        return new Promise((resolve, reject) => {
            httpClient.post<ILoginResponse>(APIPaths.LOGIN, {
                username: username,
                password: password
            })
                .then((res) => {
                    saveToken(res.data.accessToken, res.data.refreshTokenId)
                    setTimeout(() => {
                        refreshToken()
                    }, 590000)
                    resolve(res);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    return (
        {
            token,
            login,
            refreshTokenId,

            setToken: saveToken
        }
    )
}
