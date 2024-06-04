import './App.css';

export function TwitterFollowCard({children, userName, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://yt3.ggpht.com/yti/ANjgQV_1ZnsfkX_UovXnl7mElusDmNVoZAplEXB5UCmc1YYdXA=s88-c-k-c0x00ffffff-no-rj-mo" alt="mi avatar" />
                <div className='tw-followCard-info'>
                    {children}
                    <span>@Prueba</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
