import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BugState {
    readonly id: number;
    readonly description: string;
    readonly resolved: boolean;
};

const initialBugState: BugState = {
    id: 0,
    description: "",
    resolved: false
};

interface BugTrackerState {
    readonly lastId: number;
    readonly bugs: BugState[];
};

const initialBugTrackerState: BugTrackerState = {
    lastId: 0,
    bugs: [initialBugState]
};

const bugSlice = createSlice({
    name: 'bug',
    initialState: initialBugTrackerState,
    reducers: {
        bugAdded: (state, action: PayloadAction<BugState>) => {
                state.lastId = state.lastId + 1;
                state.bugs = [
                    ...state.bugs,
                    {
                        id: state.lastId,
                        description: action.payload.description,
                        resolved: false
                    }
                ];
            },
        bugRemoved: (state, action: PayloadAction<BugState>) => {
            state.bugs = state.bugs.filter(bug => bug.id !== action.payload.id);
        }
    }
})

export const { bugAdded, bugRemoved } = bugSlice.actions;

export default bugSlice.reducer;