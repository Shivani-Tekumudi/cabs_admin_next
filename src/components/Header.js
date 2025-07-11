import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import { useRouter } from 'next/router';
import { useAdminContext } from 'context/adminContext';

export default function Header({ adminName }) {
   
 const router = useRouter();
const { showToast } = useAdminContext();
  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
    });
  if (res.ok) {
      showToast('Logout successful');
      setTimeout(() => router.push('/'), 1000);
    } else {
      showToast('Failed to logout', 'error');
    }
    router.push('/'); 
  };


    return (
        <>



            <nav className="bg-white border-gray-200 border border-gray-200">
                <div className=" flex flex-wrap items-center justify-between w-full p-2 ">

                    <div> <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button></div>
                    <div className=" md:block md:w-auto" id="navbar-dropdown">

                  <div className=" top-24 w-52 text-right mr-5">
    <Menu>
      <MenuButton className='focus:border border-none'>
        <div className='flex justify-center items-center'>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-200 rounded-full ">
    <div className="font-medium text-gray-600 ">A </div>
</div> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg></div></MenuButton>
      <MenuItems anchor="bottom" className="bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 focus:border border-none">
        <MenuItem className="py-2 text-md text-gray-700 ">
          <span className="block data-focus:bg-blue-100 px-5" >
           { adminName }
          </span>
        </MenuItem>
       <MenuItem className="py-2 text-md text-gray-700 ">
          <button className="block w-full text-left hover:cursor-pointer data-focus:bg-blue-100 px-5"  onClick={handleLogout}>
            Log out
          </button>
        </MenuItem>
        
      </MenuItems>
    </Menu>
    </div>
                    </div>
                </div>
            </nav>

        </>
    )
}