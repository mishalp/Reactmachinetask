import photo from '@/assets/images/media.png'
import fb from '@/assets/images/facebook.png'
import insta from '@/assets/images/instagram.png'
import twitter from '@/assets/images/twitter.png'

function ProfileCard() {
    return (
        <div className="flex w-full flex-col bg-white max-w-[15rem] rounded-md overflow-hidden shadow-md justify-center justify-self-center">
            <img src={photo} className='w-full  max-h-[15rem]  object-top object-cover  aspect-[2/3]' alt="" />
            <div className="flex h-full p-4 flex-col gap-3 items-center justify-center">
                <h2 className='text-black font-bold'>John Doe</h2>
                <p>CEO</p>
                <div className="flex gap-3">
                    <img src={fb} className='w-6 h-auto' alt="" />
                    <img src={insta} className='w-6 h-auto' alt="" />
                    <img src={twitter} className='w-6 h-auto' alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard