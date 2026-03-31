import { FaLock } from "react-icons/fa";

function SignIn() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 
            bg-gradient-to-br from-sky-100 via-sky-200 to-yellow-50 ">
            <div className="w-full max-w-md">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-ocean-200/50">
                    <div className="text-center mb-8 ">
                        <div className="inline-flex  flex-col items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 mb-4 shadow-lg">
                            <span>
                                <FaLock />
                            </span>
                        </div>
                        <h1 className="text-ocean-900 mb-2">Chào mừng trở lại</h1>
                        <p className="text-ocean-600">Đăng nhập Vào Tài Khoản Của Bạn</p>
                    </div>
                    <form>

                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;