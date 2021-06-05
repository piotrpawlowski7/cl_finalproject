import SearchTable from 'reactable-search';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <SearchTable
      searchPrompt="Type to search"
      rows={solutions}/>,
    document.getElementByID("root");