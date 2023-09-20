import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className="mb-8">
      <p className="text-center">
        All copy rights &copy; {date.getFullYear()} are reserved by devpdhana
      </p>
    </div>
  );
}

export default Footer