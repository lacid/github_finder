import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setText('');
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          required
        />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {githubContext.users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
