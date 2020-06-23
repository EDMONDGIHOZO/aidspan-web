import http from '../http-common'

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData()

        formData.append('file', file)

        return axios.post('/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
        })
    }
}

export default new UploadFilesService()