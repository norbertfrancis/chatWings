export const signup = async (req, res) => {
    try {
        const {fullName, username, password,confirmPassword, gender} = req.body
        
    } catch (error) {
        
    }
}

export const login = (req, res) => {
    res.send("loginUser")
    console.log('Login user')
    
}
export const logout = (req, res) => {
    res.send("logoutByUser")
    console.log("logout")
}

