"use client"
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent, // Get the text content of each h2 element
      id: h2.id // Get the id attribute of each h2 element
    }));
    setHeadings(h2Data); // Update the state with the extracted headings
  }, [htmlContent]); // Re-run the effect when htmlContent changes

  return (
    <div className="on-this-page absolute top-24 md:right-48 lg:right-1 overflow-hidden hidden lg:block">
      <h2 className='text-md font-bold my-2'>On This Page</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li className='underline' key={index}>
            <a href={`#${heading.id}`}>{heading.text}</a> {/* Link to the heading's id */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;