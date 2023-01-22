// This code is a React component called "VideoPage". 
// It is using the React Hooks "useForm" and "useState" 
// to handle form submissions and keep track of the state
//  of the component. The component is also using styled-components
//   to create a grid layout that looks similar to YouTube's layout.
//    There is a search bar, an upload feature, a grid to display
//     videos, and pagination buttons. The component also has some
//      functions that handle different actions such as searching for 
//      videos, uploading videos, and handling pagination. When a user 
//      submits the search form it will call the "searchVideos" function, 
//      when the user submits the upload form it will call the "uploadVideo" 
//      function, and when the user clicks on "next" or "previous" it will 
//      call the "handleNextPage" or "handlePreviousPage" function respectively.



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const VideoPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    "video-search video-upload"
    "video-list video-list"
    "video-pagination video-pagination";
  grid-gap: 20px;
  padding: 20px;
`;

const VideoSearch = styled.form`
  grid-area: video-search;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    border: none;
    padding: 10px;
    font-size: 18px;
  }
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const VideoUpload = styled.div`
  grid-area: video-upload;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    border: none;
    padding: 10px;
    font-size: 18px;
  }
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const VideoList = styled.div`
  grid-area: video-list;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const VideoPagination = styled.div`
  grid-area: video-pagination;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  align-items: center;
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

function VideoPage() {
    const { register, handleSubmit } = useForm();
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPreviousPage, setHasPreviousPage] = useState(false);
    
    const searchVideos = data => {
      // Code to search for videos
    };
    const uploadVideo = data => {
      // Code to upload a video
    };
  
    const handleNextPage = () => {
      // Code to handle pagination and display next page of videos
    };
  
    const handlePreviousPage = () => {
      // Code to handle pagination and display previous page of videos
    };
  
    return (
      <VideoPageContainer>
          <VideoSearch onSubmit={handleSubmit(searchVideos)}>
              <input type="text" placeholder="Search for videos" name="search" ref={register} />
              <button type="submit">Search</button>
          </VideoSearch>
          <VideoUpload onSubmit={handleSubmit(uploadVideo)}>
              <input type="file" name="video" ref={register} />
              <button type="submit">Upload</button>
          </VideoUpload>
          <VideoList>
              {/* Code to display list of videos */}
          </VideoList>
          <VideoPagination>
              <button onClick={handlePreviousPage} disabled={!hasPreviousPage}>Previous</button>
              <button onClick={handleNextPage} disabled={!hasNextPage}>Next</button>
          </VideoPagination>
      </VideoPageContainer>
    );
  }

export default VideoPage;

