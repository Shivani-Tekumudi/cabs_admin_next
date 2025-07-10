export async function protectRoute(context) {
  const cookies = context.req.headers.cookie || '';
  const isLoggedIn = cookies.includes('loggedIn=true');

  if (!isLoggedIn) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export async function loginChecks(context){
  const cookies = context.req.headers.cookie || '';
  const isLoggedIn = cookies.includes('loggedIn=true');

  if (isLoggedIn) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    };
  }

  return { props: {} };
} 