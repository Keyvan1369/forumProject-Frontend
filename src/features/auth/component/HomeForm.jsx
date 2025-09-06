
import React from 'react'
import { PostList } from '../../post/components/PostList'

export const HomeForm = () => {
 

   
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      
      

      <div className="flex">
        
        <aside className="w-64 bg-white border-r p-6 hidden lg:block">
          <nav className="space-y-4 text-sm">
            <div className="text-gray-500 font-semibold mb-2">MENU</div>
            <a href="#" className="text-orange-500 font-medium">📋 Questions</a>
            <a href="#" className="hover:text-orange-500">🏷️ Tags</a>
            <a href="#" className="hover:text-orange-500">📊 Ranking</a>
          </nav>
          <div className="absolute bottom-6 flex space-x-4">
            <a href="#"><img src="https://img.icons8.com/ios-filled/20/instagram-new.png" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/20/github.png" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/20/facebook-new.png" /></a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Questions</h2>
            <div className="space-x-2 text-sm">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded">🆕 New</button>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Top</button>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Hot</button>
              <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Closed</button>
            </div>
          </div>

          {/* Question Cards */}
         <PostList/>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-6 hidden lg:block">
          <div className="bg-white p-4 rounded shadow text-sm space-y-4">
            <div>
              <h4 className="font-semibold mb-2">⭐ Must-read posts</h4>
              <ul className="list-disc list-inside text-blue-600 space-y-1">
                <li><a href="#">Please read rules before you start...</a></li>
                <li><a href="#">Vision & Strategy of Alemhelp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔗 Featured links</h4>
              <ul className="list-disc list-inside text-blue-600 space-y-1">
                <li><a href="#">Alemhelp source-code on GitHub</a></li>
                <li><a href="#">Golang best-practices</a></li>
                <li><a href="#">Alem.School dashboard</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

