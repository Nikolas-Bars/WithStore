import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra"} />);
        const instance = component.getInstance(); // instance - это экземпляр чего-либо, объект (тот что создается на базе класса реактом)
        expect(instance.state.status).toBe("it-kamasutra");
    });
});