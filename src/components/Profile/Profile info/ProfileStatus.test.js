import React from "react";

import ProfileStatus from "./ProfileStatus";
import { create } from "react-test-renderer";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const instance = component.getInstance(); // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        expect(instance.state.status).toBe("it-kamasutra");
    });
    test("after creation span with status should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root; // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        let span = root.findByType('span')
        expect(span.children.length).toBe(1);
    });

    test("after creation input with status shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root; // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        expect(()=>{
            let input = root.findByType('input')
        }).toThrow()
    });


    test("after creation span should be contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root; // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        let span = root.findByType('span')
        expect(span.children[0]).toBe("it-kamasutra")
    });
    test("input should be displayed in EditMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root; // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')

        expect(input.props.value).toBe("it-kamasutra")
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus updateStatusThunk={mockCallback}/>);
        const instance = component.getInstance(); // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        instance.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });



});


