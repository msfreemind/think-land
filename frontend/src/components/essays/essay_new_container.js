import { connect } from 'react-redux';
import { createEssay } from '../../actions/essay_actions';
import { clearActiveDraft, createDraft, destroyDraft, updateDraft } from '../../actions/draft_actions';
import { fetchCategories } from '../../actions/category_actions';
import EssayForm from './essay_form';
import { setMode } from '../../actions/mode_actions';

const mapStateToProps = state => ({
  draftErrors: state.errors.drafts,
  essayErrors: state.errors.essays,
  draft: state.entities.activeDraft,
  categories: state.entities.categories,
  actionType: "new"
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  createEssay: essay => dispatch(createEssay(essay)),
  createDraft: draft => dispatch(createDraft(draft)),
  updateDraft: draft => dispatch(updateDraft(draft)),
  destroyDraft: draftId => dispatch(destroyDraft(draftId)),
  clearActiveDraft: () => dispatch(clearActiveDraft()),
  setMode: mode => dispatch(setMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);