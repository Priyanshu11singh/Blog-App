
import  { useState, useEffect } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu , setMenu] = useState("All")
  const { blogs, input } = useAppContext()

  // ✅ Filter blogs based on search input and selected category
  const filteredBlogs = blogs
    ?.filter(blog =>
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    )
    ?.filter(blog => (menu === "All" ? true : blog.category === menu));

  return (
    <div>
      {/* --- Category Menu --- */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* --- Blog Cards --- */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {filteredBlogs?.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No blogs found.
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogList
