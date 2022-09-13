import {userLogin} from '@/services/user.service.js'


export default {
    state:{
        user: {}
    },

    getters:{
        getUser(state){
            return state.user;
        }
    },
    mutations:{
        setUser(state, newUser){
            state.user = newUser;
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
                    success();
                },
                error: (e)=>{
                    commit('setUser', {});
                    console.warn('Service call for login failed: ', e);
                    error();
                },
                user
            })
        }
    }
}