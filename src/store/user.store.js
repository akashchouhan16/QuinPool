import {userLogin} from '@/services/user.service.js'


export default {
    state:{
        user: {},
        isLoggedIn: false
    },

    getters:{
        getUser(state){
            return state.user;
        },
        getLoggedInStatus(state){
            return state.isLoggedIn;
        }
    },
    mutations:{
        setUser(state, newUser){
            state.user = newUser;
        },
        setLoggedInStatus(state, status){
            state.isLoggedIn = status;
        }
    },
    actions:{
        LOGIN_USER({commit}, {success, error, user}){
            userLogin({
                success: (response)=>{
                    commit('setUser', response.data);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('isLoggedIn', true);
                    commit('setLoggedInStatus', true);
                    success();
                },
                error: (e)=>{
                    commit('setUser', {});
                    console.warn('Service call for login failed: ', e);
                    commit('setLoggedInStatus', false);
                    error();
                },
                user
            })
        }
    }
}