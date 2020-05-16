import React from 'react';
import faker from 'faker';



const CommentDetail = (props) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}    />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>

                    <div className="metadata">
                        <span className="date">Today at 8:00PM</span>
                    </div>
                    <div className="text">Nice post</div>
                </div>

            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}    />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>

                    <div className="metadata">
                        <span className="date">Today at 8:00PM</span>
                    </div>
                    <div className="text">Nice post</div>
                </div>

            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}    />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>

                    <div className="metadata">
                        <span className="date">Today at 8:00PM</span>
                    </div>
                    <div className="text">Nice post</div>
                </div>

            </div>
        </div>
    )
}

export default CommentDetail;