import React from 'react';


const Downloads = () => {
  const downloads = [
    { id: 1, name: 'E-book Guide', type: 'PDF', size: '2.4 MB', date: '2023-05-15' },
    { id: 2, name: 'Software Tool', type: 'ZIP', size: '15.7 MB', date: '2023-06-22' },
    // More download items...
  ];

  return (
    <div className="downloads-page">
      <h1>Your Downloads</h1>
      <div className="downloads-list">
        {downloads.map(item => (
          <DownloadItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Downloads;