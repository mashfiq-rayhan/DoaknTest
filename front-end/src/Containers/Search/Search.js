
// import { useDispatch } from 'react-redux';

// import useInput from '../../hooks/useInput';
// import * as actions from '../../store/actions/index';

// const Search = (props) => {

//   const { 
//     value: searchItem, 
//     inputChangedHandler: searchItemChangedHandler, 
//     inputBlurHandler: searchItemBlurHandler,
//     reset: resetSearch
//   } = useInput(value => value.trim() !== '');
    
//     const dispatch = useDispatch();
//     const onAuth = (searchItem) => dispatch(actions.search(searchItem));
    
//     const searchHandler = event => {
//       event.preventDefault();
//       onAuth(searchItem);
//       resetSearch();
//     }


//   return (
//         <form onSubmit={searchHandler}>
//             <input
//               className={classes.InputInfo}
//               type="text"
//               placeholder="Search"
//               value={searchItem}
//               onChange={searchItemChangedHandler}
//               onBlur={searchItemBlurHandler}
//               required
//             />
//         </form>
  
//   );

// };



// export default Search;


    
