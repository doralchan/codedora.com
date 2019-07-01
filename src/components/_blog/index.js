import React, { Component } from 'react';
import classNames from 'classnames';

import Post from '../post';
import Profile4 from '../../assets/profile_4.svg';

import './style.scss';

class Blog extends Component {
  render() {
    const blogClasses = classNames('blog', this.props.className);

    return (
      <div id='blog' className={ blogClasses }>
        <img src={ Profile4 } className='blog-profile' alt='' />
        <Post title='Blog Entry 1'>
          Title
        </Post>
        <Post title='Blog Entry 2'>
          Title
        </Post>
        <Post title='Blog Entry 3'>
          Title
        </Post>
        <Post title='Blog Entry 4'>
          Title
        </Post>
      </div>
    )
  }
}

export default Blog;
