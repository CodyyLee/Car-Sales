export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (target) => {
    console.log(target);
    return { type: REMOVE_FEATURE, feature: target };
}