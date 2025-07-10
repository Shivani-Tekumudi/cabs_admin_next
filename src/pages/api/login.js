export default function loginHandler(req, res){
const {email,password} = req.body;
if (req.method === 'POST') {
if(email === 'admin1@gmail.com' && password === '123456'){
    const ONE_DAY = 60 * 60 * 24;
    res.setHeader('Set-cookie', `loggedIn=true;Max-Age=${ONE_DAY}; Path=/ ; HttpOnly;Secure; SameSite=Lax`);
    return res.status(200).json({ message: 'Login successful' })
}

return res.status(401).json({success:false, message : 'Invalid Credentials'})
}
return res.status(405).json({success:false, message : 'Method not allowed'})

}