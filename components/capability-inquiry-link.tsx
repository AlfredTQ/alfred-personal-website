'use client';

export const capabilitySelectionEvent = 'portfolio:select-service';

export function CapabilityInquiryLink({ service }: { service: string }) {
  function selectService() {
    window.dispatchEvent(new CustomEvent(capabilitySelectionEvent, { detail: service }));
  }

  return <a href="#contact" onClick={selectService}>Discuss this service <span>↗</span></a>;
}
