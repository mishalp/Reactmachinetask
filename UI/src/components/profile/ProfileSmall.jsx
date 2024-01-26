import dp from '@/assets/images/Rectangle 10.png'

function ProfileSmall() {
    return (
        <div className="px-4 py-2 bg-white flex gap-4 rounded-md">
            <div className="flex flex-col">
                <p>John Doe</p>
                <p className='text-sm'>john@doe.com</p>
            </div>
            <img src={dp} className='w-10 h-auto' alt="" />
        </div>
    )
}

export default ProfileSmall