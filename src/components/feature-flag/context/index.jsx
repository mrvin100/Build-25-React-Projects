import { createContext, useEffect, useState } from "react";
import FeatureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFutureFlags = async () => {
    try {
      setLoading(true);
      const response = await FeatureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchFutureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
