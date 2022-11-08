import { useState } from 'react';
import './Chat.css'
const UserChat = () => {
    const [openChat, setOpenChat] = useState(false);
    const handleChatOpenClose =()=>{
        setOpenChat(!openChat);
    }
    return(
        <>
        <label className='chat-btn'>
            {!openChat && <i className="bi bi-chat-dots" onClick={handleChatOpenClose}/>} 
             <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden"></span></span>
            {openChat && <i className="bi bi-x-circle" onClick={handleChatOpenClose}/>}
        </label>
        {openChat && <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat - Online</h6>
        </div>
        <div className="chat-form">
            <div className="cht-msg">
                    {Array.from({ length: 20 }).map((_, id) => (
                    <div key={id}>
                        <p className='clint-msg'>
                        <b>Support:</b> Hello, world! This is a toast message.
                        </p>
                        <p className="support-msg bg-primary ms-3 text-light ">
                        <b>You:</b> Hello, world! This is a toast message.
                        </p>
                    </div>
                    ))}
            </div>
          <div className=' input-send-container'>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          >
            
            
          </textarea>
                 <button className=" send-button btn-success btn-block"><i className="bi bi-send-fill"></i></button>
          </div>

          
        </div>
      </div>}
        </>
    )
}
export default UserChat;