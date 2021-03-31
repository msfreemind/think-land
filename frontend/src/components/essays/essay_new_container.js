import { connect } from 'react-redux';
import { createEssay } from '../../actions/essay_actions';
import { clearActiveDraft, createDraft, destroyDraft, updateDraft } from '../../actions/draft_actions';
import EssayForm from './essay_form';

const mapStateToProps = state => ({
  draftErrors: state.errors.drafts,
  essayErrors: state.errors.essays,
  draft: state.entities.activeDraft,
  actionType: "new"
});

const mapDispatchToProps = dispatch => ({
  createEssay: essay => dispatch(createEssay(essay)),
  createDraft: draft => dispatch(createDraft(draft)),
  updateDraft: draft => dispatch(updateDraft(draft)),
  destroyDraft: draftId => dispatch(destroyDraft(draftId)),
  clearActiveDraft: () => dispatch(clearActiveDraft())
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);