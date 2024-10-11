import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(() =>{

        // A request interceptor: is a function that gets triggered before a request is made.
        // It allows you to modify or inject logic into the outgoing request,
        // like adding headers (e.g., the Authorization header with a JWT).

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );


        const responseIntercept = axiosPrivate.interceptors.response.use(
            // If the response is successful, the users data is logged and saved in the component’s state.
            response => response,
            // If a 403 error occurs, the response interceptor tries to refresh the token by calling refresh().
            // If the refresh succeeds, the original request is retried with the new token.
            // If the refresh fails, the user is redirected to the login page.
            async (error) =>{
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(prevRequest);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth,refresh])

    return axiosPrivate;
}