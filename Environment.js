const Environments = {
    API_END_POINT: 'http://192.168.0.145:3000/api/users'
}

const getEnvironment = (variable) => {
    return Environments[variable];
}

export default getEnvironment;