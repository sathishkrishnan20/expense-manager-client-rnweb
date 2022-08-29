export const navigate = (navigation: any[], screenName: string, params: any = {}) => {
    navigation.push(screenName, params)
}