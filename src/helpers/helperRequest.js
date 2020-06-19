class HelperRequest {

    static config = (method, body) => {
        let bearer;

        bearer = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, '$1');

        return {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${bearer}`,
            },
            body: body ? JSON.stringify(body) : null,
        };
    };
}

export default HelperRequest;
