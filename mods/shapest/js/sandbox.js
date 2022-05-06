import { Blueprint, HubGoals } from "./shapez.js";
export class SandboxMode {
    static install(mod) {
        mod.modInterface.replaceMethod(Blueprint, "getCost", function () {
            return 0;
        });
        mod.modInterface.replaceMethod(HubGoals, "isRewardUnlocked", function () {
            return true;
        });
        // mod.signals.modifyLevelDefinitions.add((
        // 	levels: {
        // 		shape: string;
        // 		required: number;
        // 		reward: string;
        // 		throughputOnly: boolean;
        // 	}[]
        // ) => {
        // 	levels.map(e => e.required = 1);
        // });
        // mod.signals.modifyUpgrades.add((
        // 	upgrades: Record<string, {
        // 		required: {
        // 			shape: string;
        // 			amount: number;
        // 		}[];
        // 		excludePrevious?: boolean;
        // 	}[]>
        // ) => {
        // 	Object.values(upgrades).flat().flatMap(e => e.required).map(e => e.amount = 1);
        // });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuZGJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NhbmRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQU8sTUFBTSxhQUFhLENBQUM7QUFHdkQsTUFBTSxPQUFPLFdBQVc7SUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFRO1FBQ3RCLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7WUFDcEQsT0FBTyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBRUgsMkNBQTJDO1FBQzNDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQiw2QkFBNkI7UUFDN0IsT0FBTztRQUNQLFNBQVM7UUFDVCxvQ0FBb0M7UUFDcEMsTUFBTTtRQUdOLG1DQUFtQztRQUNuQyw4QkFBOEI7UUFDOUIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsU0FBUztRQUNULCtCQUErQjtRQUMvQixRQUFRO1FBQ1IsU0FBUztRQUNULG1GQUFtRjtRQUNuRixNQUFNO0lBQ1AsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZXByaW50LCBIdWJHb2FscywgTW9kIH0gZnJvbSBcIi4vc2hhcGV6LmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRib3hNb2RlIHtcclxuXHRzdGF0aWMgaW5zdGFsbChtb2Q6IE1vZCkge1xyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5yZXBsYWNlTWV0aG9kKEJsdWVwcmludCwgXCJnZXRDb3N0XCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9KTtcclxuXHRcdG1vZC5tb2RJbnRlcmZhY2UucmVwbGFjZU1ldGhvZChIdWJHb2FscywgXCJpc1Jld2FyZFVubG9ja2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBtb2Quc2lnbmFscy5tb2RpZnlMZXZlbERlZmluaXRpb25zLmFkZCgoXHJcblx0XHQvLyBcdGxldmVsczoge1xyXG5cdFx0Ly8gXHRcdHNoYXBlOiBzdHJpbmc7XHJcblx0XHQvLyBcdFx0cmVxdWlyZWQ6IG51bWJlcjtcclxuXHRcdC8vIFx0XHRyZXdhcmQ6IHN0cmluZztcclxuXHRcdC8vIFx0XHR0aHJvdWdocHV0T25seTogYm9vbGVhbjtcclxuXHRcdC8vIFx0fVtdXHJcblx0XHQvLyApID0+IHtcclxuXHRcdC8vIFx0bGV2ZWxzLm1hcChlID0+IGUucmVxdWlyZWQgPSAxKTtcclxuXHRcdC8vIH0pO1xyXG5cclxuXHJcblx0XHQvLyBtb2Quc2lnbmFscy5tb2RpZnlVcGdyYWRlcy5hZGQoKFxyXG5cdFx0Ly8gXHR1cGdyYWRlczogUmVjb3JkPHN0cmluZywge1xyXG5cdFx0Ly8gXHRcdHJlcXVpcmVkOiB7XHJcblx0XHQvLyBcdFx0XHRzaGFwZTogc3RyaW5nO1xyXG5cdFx0Ly8gXHRcdFx0YW1vdW50OiBudW1iZXI7XHJcblx0XHQvLyBcdFx0fVtdO1xyXG5cdFx0Ly8gXHRcdGV4Y2x1ZGVQcmV2aW91cz86IGJvb2xlYW47XHJcblx0XHQvLyBcdH1bXT5cclxuXHRcdC8vICkgPT4ge1xyXG5cdFx0Ly8gXHRPYmplY3QudmFsdWVzKHVwZ3JhZGVzKS5mbGF0KCkuZmxhdE1hcChlID0+IGUucmVxdWlyZWQpLm1hcChlID0+IGUuYW1vdW50ID0gMSk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn0iXX0=