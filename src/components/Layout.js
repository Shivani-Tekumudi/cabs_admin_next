import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({  adminName }) {
  return (
      <>
<Sidebar />
<Header adminName={adminName}/>

</>
  );
}