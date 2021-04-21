declare function useScreenSize(): {
    width: number;
    height: number;
};

declare function useScreenWidth(): number;
declare function useScreenHeight(): number;

export default useScreenSize;
export { useScreenHeight, useScreenWidth };
