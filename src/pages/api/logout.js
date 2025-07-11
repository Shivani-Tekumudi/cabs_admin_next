export default function logoutHandler(req, res) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', [
      `loggedIn=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`,
      `adminName=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`
    ]);

    return res.status(200).json({ message: 'Logged out successfully' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}