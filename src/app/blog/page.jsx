import Link from 'next/link';
import React from 'react'
import Navbar from '../../components/Navbar';

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="mt-36 text">
                <h1 className='text-3xl italic font-bold text-center'>Blog</h1>
                <div className="max-w-6xl px-4 py-8 mx-auto border">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col items-center pb-6 mb-8 border-b cursor-pointer md:flex-row">
                            <div className="md:w-1/3">
                                <img src="/images/graduate.jpg" alt={post.title} className="object-cover h-40 rounded-md w-96" />
                            </div>
                            <div className="mt-4 md:w-2/3 md:pl-6 md:mt- w-96">
                                <p className="text-sm text-gray-500">{post.category} • {post.date}</p>
                                <Link href="" className=' hover:underline underline-offset-4 decoration-2'>
                                    <h2 className="mt-2 text-xl font-bold text-gray-900 md:text-2xl">{post.title}</h2>
                                </Link>
                                <p className="mt-2 text-gray-600">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog


const blogPosts = [
    {
        id: 1,
        category: "Operations & Finance",
        date: "Dec 23, 2024",
        title: "How to plan a company retreat for 200 people in Nigeria",
        description: "Learn how Paystack organized a successful company offsite for 200 employees across four markets.",
        image: "https://via.placeholder.com/300",
    },
    {
        id: 2,
        category: "Tech & Innovation",
        date: "Jan 15, 2025",
        title: "The Future of AI in African Startups",
        description: "A look at how artificial intelligence is shaping the startup ecosystem in Africa.",
        image: "https://via.placeholder.com/300",
    },
    {
        id: 3,
        category: "Marketing & Sales",
        date: "Feb 10, 2025",
        title: "Growth Hacking Strategies for New Businesses",
        description: "Discover innovative ways to scale your business quickly with minimal budget.",
        image: "https://via.placeholder.com/300",
    },
    {
        id: 4,
        category: "Product Development",
        date: "Mar 05, 2025",
        title: "Building Scalable SaaS Platforms",
        description: "Key insights into building a SaaS product that can handle growth effectively.",
        image: "https://via.placeholder.com/300",
    },
    {
        id: 5,
        category: "Finance & Investment",
        date: "Apr 18, 2025",
        title: "Raising Capital for Your Startup in Nigeria",
        description: "A guide to securing funding and pitching to investors in the Nigerian market.",
        image: "https://via.placeholder.com/300",
    }
];