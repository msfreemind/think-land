import { connect } from 'react-redux';
import { createEssay } from '../../actions/essay_actions';
import { updateDraft, fetchDraft, destroyDraft } from '../../actions/draft_actions';
import { fetchCategories } from '../../actions/category_actions';
import EssayForm from './essay_form';

const mapStateToProps = (state, ownProps) => ({
  draftErrors: state.errors.drafts,
  essayErrors: state.errors.essays,
  draft: state.entities.drafts[ownProps.match.params.draftId],
  categories: state.entities.categories,
  actionType: "edit"
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchDraft: draftId => dispatch(fetchDraft(draftId)),
  createEssay: essay => dispatch(createEssay(essay)),
  updateDraft: draft => dispatch(updateDraft(draft)),
  destroyDraft: draftId => dispatch(destroyDraft(draftId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);