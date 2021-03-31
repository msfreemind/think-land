import { connect } from 'react-redux';
import { createEssay } from '../../actions/essay_actions';
import { updateDraft, fetchDraft, destroyDraft } from '../../actions/draft_actions';
import EssayForm from './essay_form';

const mapStateToProps = (state, ownProps) => ({
  draftErrors: state.errors.drafts,
  essayErrors: state.errors.essays,
  draft: state.entities.drafts[ownProps.match.params.draftId],
  actionType: "edit"
});

const mapDispatchToProps = dispatch => ({
  fetchDraft: draftId => dispatch(fetchDraft(draftId)),
  createEssay: essay => dispatch(createEssay(essay)),
  updateDraft: draft => dispatch(updateDraft(draft)),
  destroyDraft: draftId => dispatch(destroyDraft(draftId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);