// Import the necessary libraries
import { useRef } from 'react';
import { isEqual } from 'lodash';
import { useEffect, useRef } from 'react';

// Define a custom hook, useDeepCompareMemoize, that takes a value as an argument 
// and returns a memoized version of the value that only updates if the new 
// value is not equal to the existing one.
const useDeepCompareMemoize = value => {
  // Initialize a reference to the value using useRef.
  const valueRef = useRef();

  // If the new value is not equal to the current one, update the reference with the new value.
  if (!isEqual(value, valueRef.current)) {
    valueRef.current = value;
  }

  // Return the memoized value.
  return valueRef.current;
};

// Define another custom hook, useOnOutsideClick, that listens for mouse clicks outside 
// of a given element and calls a callback function when a click occurs outside of it. 
// The hook takes in multiple arguments including the elements to be ignored during the 
// check, whether or not the listener is currently active, the callback function to call 
// on outside clicks, and the element that the listener should be attached to.
const useOnOutsideClick = (
  $ignoredElementRefs,
  isListening,
  onOutsideClick,
  $listeningElementRef,
) => {
  // Initialize a reference to the mouse-down target using useRef.
  const $mouseDownTargetRef = useRef();

  // Memoize the list of ignored element references using the useDeepCompareMemoize hook.
  const $ignoredElementRefsMemoized = useDeepCompareMemoize([$ignoredElementRefs].flat());

  // Use the useEffect hook to add event listeners for mouse down and up events. 
  // This hook also handles removing these listeners when the component unmounts.
  useEffect(() => {
    // Define a function that sets the mouse-down target reference to the current event target.
    const handleMouseDown = event => {
      $mouseDownTargetRef.current = event.target;
    };

    // Define a function that checks if the mouse up event occurred outside of the listening element 
    // and all ignored elements, and calls the onOutsideClick callback if it did.
    const handleMouseUp = event => {
      const isAnyIgnoredElementAncestorOfTarget = $ignoredElementRefsMemoized.some(
        $elementRef =>
          $elementRef.current.contains($mouseDownTargetRef.current) ||
          $elementRef.current.contains(event.target),
      );
      if (event.button === 0 && !isAnyIgnoredElementAncestorOfTarget) {
        onOutsideClick();
      }
    };

    // Get the element to attach the listener to by either using the provided ref or defaulting to document.
    const $listeningElement = ($listeningElementRef || {}).current || document;

    // If the listener is currently active, add listeners for mouse down and up events. 
    if (isListening) {
      $listeningElement.addEventListener('mousedown', handleMouseDown);
      $listeningElement.addEventListener('mouseup', handleMouseUp);
    }

    // Return a cleanup function that removes the listeners when the component unmounts.
    return () => {
      $listeningElement.removeEventListener('mousedown', handleMouseDown);
      $listeningElement.removeEventListener('mouseup', handleMouseUp);
    };
  }, [$ignoredElementRefsMemoized, $listeningElementRef, isListening, onOutsideClick]);
};

// Export the useOnOutsideClick hook as the default export.
export default useOnOutsideClick;