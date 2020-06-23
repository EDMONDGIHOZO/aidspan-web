import http from '../http-common'

class staffer {
    /** login user **/
    login(userdata) {
            return http.post('/login', userdata)
        }
        /** password reset **/
    passwordReset(userinfo) {
        return http.post('/passwordreset', userinfo)
    }
    resetpwd(userdata) {
            return http.put(
                `/passwordreset/${userdata.token}/${userdata.email}`,
                userdata,
            )
        }
        /**create the subscriber */
    create(data) {
            return http.post('/subscribers', data)
        }
        /** image upload */

    imageupload(data) {
        return http.post(`/images`, data)
    }
}

export default new staffer()