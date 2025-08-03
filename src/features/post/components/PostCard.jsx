import React from 'react'

export const PostCard = ({user,time,title,content,views,comments,upvotes}) => {
    
  return (
  
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center space-x-3 text-sm mb-2">
                  <img
                    src="https://via.placeholder.com/30"
                    alt="avatar"
                    className="rounded-full w-7 h-7"
                  />
                  <span className="font-medium">{user}</span>
                  <span className="text-gray-400">{time}</span>
                </div>
                <h3 className="font-semibold text-black mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{content}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between text-sm text-gray-500">
                 {/*  <div className="flex space-x-2 mt-1">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 px-2 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  <div className="flex space-x-4 mt-1">
                    <span>👁️ {views}</span>
                    <span>💬 {comments}</span>
                    <span>⬆️ {upvotes}</span>
                  </div>
                </div>
              </div>
          
  )
}
