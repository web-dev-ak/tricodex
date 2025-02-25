import React from 'react';

function CodeBlock({ code }) {
  return (
    <div className="w-full my-4 overflow-x-auto">
      <pre className="bg-gray-900 text-gray-100 text-sm sm:text-base font-mono p-4 min-w-[300px] border border-gray-700">
        <code className="block whitespace-pre-wrap break-words">
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeBlock;