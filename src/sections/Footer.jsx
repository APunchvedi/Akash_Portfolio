import React from 'react'

const Footer = () => {
    return (
        <section className="c-sppace pt-7 pb-3 border-t border-black-300 flex justify-between items-center
        flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p></p>
                <p>Privacy Policy</p>
                </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href='https://github.com/APunchvedi' target="_blank">
                        <img src="/assets/github.svg" alt="github" className="w-6 h-6"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://x.com/messages">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/direct/inbox/?next=%2F">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6"/>
                    </a>
                </div>
            </div>
            <p className="text-white-800"> © 2024 Akash Punchvedi. All rights reserved</p>
        </section>
    )
}
export default Footer
