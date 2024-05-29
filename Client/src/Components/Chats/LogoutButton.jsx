// import React from 'react';
// import LogoutIcon from '@mui/icons-material/Logout';
// import useLogout from '../../Hooks/useLogout';

// export default function LogoutButton() {
//     const { loading, logout } = useLogout();

//     return (
//         <div className='m-2 flex items-end'>
//             {!loading ? (
//                 <LogoutIcon className='w-6 text-white cursor-pointer' onClick={logout} />
//             ) : (
//                 <span className="loading loading-spinner"></span>
//             )}


//         </div>
//     );
// }
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import useLogout from '../../Hooks/useLogout';

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='m-2 flex items-end'>
            {!loading ? (
                <LogoutIcon className='w-6 text-white cursor-pointer' onClick={logout} />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};

export default LogoutButton;
