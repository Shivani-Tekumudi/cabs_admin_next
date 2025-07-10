import admins from '@/data/admins.json';


export default function loginHandler(req, res){
const {email,password} = req.body;
const admin = admins.find(a => a.email === email  && a.pswd === password)



console.log('Incoming request body:', req.body);
  console.log('Admins:', admins); 
  console.log('find admin' , admin)
if (req.method === 'POST') {


if(admin){
    const ONE_DAY = 60 * 60 * 24;
    res.setHeader('Set-cookie', `loggedIn=true;Max-Age=${ONE_DAY}; Path=/ ; HttpOnly;Secure; SameSite=Lax`);
    return res.status(200).json({ message: 'Login successful' })
}

return res.status(401).json({success:false, message : 'Invalid Credentials'})
}
return res.status(405).json({success:false, message : 'Method not allowed'})

}