import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as educationActions from './actions/education.actions'
import * as getSkillsActions from './actions/getSkills.actions'
import * as postSkillActions from './actions/postSkills.actions'

const rootActions = {
    ...educationActions,
    ...getSkillsActions,
    ...postSkillActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}