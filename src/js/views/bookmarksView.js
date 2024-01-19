import previewView from './previewView.js';
import View from './view.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _errorMessage = 'No bookmarks';
  _parentElement = document.querySelector('.bookmarks__list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
